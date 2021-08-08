import React, { Component } from "react";

class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromIntervals(5, 1000));
        }
        this.setState({ array });
    }

    render() {
        const {
            array,
            currentBubbleTwo,
            currentQuickTwo,
            pivot,
            currentSwappers,
            currentHeapThree,
            currentSorted,
            currentMergeX,
        } = this.props;

        const numWidth = Math.floor(document.width / (array.length * 3));
        const width = `${numWidth}px`;
        const numMargin = array.length < 5 ?
            10 : array.length < 8 ?
                8 : array.length < 11 ?
                    6 : array.length < 20 ?
                        4 : array.length < 50 ?
                            3.5 : array.length < 100 ?
                                3 : array.length < 130 ?
                                    2.5 : 2;
        const margin = `${numMargin}px`;
        const color = numWidth > 20 ? "white" : "transparent";
        const numFont = numWidth > 70 ?
            20 : numWidth > 60 ?
                18 : numWidth > 50 ?
                    16 : numWidth > 40 ?
                        14 : numWidth > 30 ?
                            12 : numWidth > 20 ?
                                10 : 8;
        const fontSize = `${numFont}px`

        return (
            <>
                {array.map(value, idx) => (
                <div className="array-bar" key={idx}>
                {value}
            </div>
        )
    }
        </>
            );
    }
}
function randomIntFromIntervals(min, max) {
    return Math, floor(Math, random() * (max - min + 1) + min);
}
export default Body;