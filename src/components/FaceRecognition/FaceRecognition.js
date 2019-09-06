import React from 'react';
import styles from './FaceRecognition.module.css';
import Spinner from '../Spinner/Spinner';

const FaceRecognition = ({ imageUrl, detectedRegions }) => {
    let createBoxes = () => {
        return detectedRegions.map(region => {
            return (
                <div key={region.left_col + region.top_row} className={styles['detection-box']} style={{
                    left: `calc(${region.left_col} * 100%)`,
                    top: `calc(${region.top_row} * 100%)`,
                    right: `calc(100% * (1 - ${region.right_col})`,
                    bottom: `calc(100% * (1 - ${region.bottom_row})`
                }}></div>
            )
        })
    }

    return (
        <div className='center'>
            {imageUrl !== '' ?
                <div className={styles['face-recognition']}>
                    <div>
                        <img src={imageUrl} alt='face' className={styles['face-image']} />
                        {!detectedRegions.length ? <Spinner /> : createBoxes()}
                    </div>
                </div>
                : null}
        </div>
    )
}

export default FaceRecognition;