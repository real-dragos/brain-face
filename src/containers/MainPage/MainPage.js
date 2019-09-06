import React, { Component } from 'react';
import styles from './MainPage.module.css';
import Logo from '../../components/Logo/Logo';
import ImageRankingMessage from '../../components/ImageRankingMessage/ImageRankingMessage';
import ImageLinkForm from '../../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';

import authorizationService from '../../services/authorizationService';

class MainPage extends Component {

    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            detectedRegions: [],
            user: {
                name: '',
                entries: '0',
                email: ''
            }
        }
    }

    componentDidMount() {
        this.updateUser();
    }

    updateUser() {
        authorizationService.loadUserData()
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }

    onInputChange = (event) => {
        const input = event.target.value;
        this.setState({
            input: input,
        });
    }

    computeDetectedRegions = (response) => {
        const regions = response.outputs[0].data.regions.map((region) => region.region_info.bounding_box);
        this.setState({
            detectedRegions: regions
        })
    }

    onDetectionSubmit = () => {
        this.setState({
            imageUrl: this.state.input,
            detectedRegions: []
        })
        authorizationService.updateImageScore(this.state.input)
            .then((res) => {
                const { entries, output } = res.data;
                const userCopy = { ...this.state.user };
                userCopy.entries = entries;
                this.setState({
                    user: userCopy
                })
                this.computeDetectedRegions(output);
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div className={styles["MainPage"]}>
                <Logo />
                <ImageRankingMessage user={this.state.user} />
                <ImageLinkForm onInputChange={this.onInputChange} onDetectionSubmit={this.onDetectionSubmit} />
                <FaceRecognition imageUrl={this.state.imageUrl} detectedRegions={this.state.detectedRegions} />
            </div>
        );
    }
}

export default MainPage;