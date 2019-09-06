import React from 'react';
import styles from './ImageLinkForm.module.css';

const ImageLinkForm = ({onInputChange, onDetectionSubmit}) => {
    return (
        <div className={styles['image-link-form']}>
            <p>This Magic Brain will detect faces in your pictures. Give it a try.</p>
            <div className='center'>
                <div className={['center', styles['input-wrapper']].join(' ')}>
                    <div className='center' style={{minWidth: '80%'}}>
                        <input className={styles['url-input']} type="text" placeholder='Image URL' onChange={onInputChange}/>
                        <button className={styles['detect-btn']} onClick={onDetectionSubmit}>Detect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;