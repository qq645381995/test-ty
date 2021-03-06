import React, { Component } from 'react';
// import Lightbox from 'react-image-lightbox';
import Lightbox from './img';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
];
interface Interface {

}
interface Interface2 {
    photoIndex:number,
    isOpen:boolean
}

export default class LightboxExample extends Component<Interface,Interface2> {
    constructor(props:any) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    moveNext=()=> {
        // @ts-ignore
        this.setState({photoIndex: (this.state.photoIndex + 1) % images.length});
    };

    movePrev=()=> {
        // @ts-ignore
        this.setState({photoIndex: (this.state.photoIndex + images.length - 1) % images.length});
    };

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <div>
                <button type="button" onClick={() => this.setState({ isOpen: true })}>
                    Open Lightbox
                </button>

                {isOpen && (
                    // @ts-ignore
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                        onPreMovePrevRequest={this.movePrev}
                        onPreMoveNextRequest={this.moveNext}
                    />
                )}
            </div>
        );
    }
}
