import React, { useEffect } from 'react';
import '../scss/Work.scss';
import API from '../util/API';

export default function Work() {

    useEffect(() => {
        console.log('asdf')
        console.log(API.getPictures());
    }, [])

    return (
        <main>
            
        </main>
    )
}
