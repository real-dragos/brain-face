import React, {Component} from 'react'; 
import Navigation from '../components/Navigation/Navigation';

const withNavigation = (WrappedComponent) => {
    return class extends Component{
        render() {
            return (
                <div>
                    <Navigation />
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }
}

export default withNavigation;