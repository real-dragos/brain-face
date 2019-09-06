import React from 'react';
import styles from './ImageRankingMessage.module.css';

const ImageRankingMessage = (props) => {
    return (
        <div className={styles['image-ranking']}>
            <p>{props.user.name}, your entry count is... </p>
            <p className={styles['rank']}>{props.user.entries}</p>
        </div>
    )
};

export default ImageRankingMessage;