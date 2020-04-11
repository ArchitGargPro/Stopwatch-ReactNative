import React, {Component} from 'react';
import { Text, TouchableOpacity, View} from "react-native";
import styles from "./stopwatch.styles";
import ListComponent from "./list.component";

class StopwatchContainer extends Component {
    state = {
        min: 0,
        sec: 0,
        mSec: 0,
        start: false,
        first: true,
    };
    lapArr = [];
    interval = null;

    constructor(props){
        super(props);

        this.state = {
            ...this.state,
            min: 0,
            sec: 0,
            mSec: 0,
        };

        this.lapArr = [];

        this.interval = null;
    }

    handleToggle = () => {
        this.setState(
            {
                ...this.state,
                start: !this.state.start
            },
            () => this.handleStart()
        );
    };

    handleLap = (min, sec, mSec) => {
        const key = this.lapArr.length+1;
        this.lapArr = [
            ...this.lapArr,
            {key, min, sec, mSec}
        ];
    };

    handleStart = () => {
        if (this.state.start) {
            this.interval = setInterval(() => {
                if (this.state.mSec !== 99) {
                    this.setState({
                        ...this.state,
                        mSec: this.state.mSec + 1
                    });
                } else if (this.state.sec !== 59) {
                    this.setState({
                        ...this.state,
                        mSec: 0,
                        sec: ++this.state.sec
                    });
                } else {
                    this.setState({
                        ...this.state,
                        mSec: 0,
                        sec: 0,
                        min: ++this.state.min
                    });
                }
            }, 10);

        } else {
            clearInterval(this.interval);
        }
    };

    handleReset = () => {
        this.setState({
            ...this.state,
            min: 0,
            sec: 0,
            mSec: 0,

            start: false
        });

        clearInterval(this.interval);

        this.lapArr = [];
    };

    resetButtonStyle = () => {
        if (this.state.start){
            return styles.disabledButton
        } else {
            if (this.state.first) {
                this.setState({
                    ...this.state,
                    first:false
                });
                return styles.disabledButton;
            } else {
                return styles.button;
            }
        }
    };

    render(){
        function padToTwo (number) {
            if (number <= 9) {
                return `0${number}`
            } else {
                return `${number}`
            }
        }

        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>STOPWATCH</Text>
                </View>
                <View style={styles.parent}>
                    <Text style={styles.child}>{padToTwo(this.state.min) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.sec) + ' : '}</Text>
                    <Text style={styles.child}>{padToTwo(this.state.mSec)}</Text>
                </View>
                <View style={styles.buttonParent}>
                    <TouchableOpacity style={styles.button} onPress={this.handleToggle}><Text style={styles.buttonText}>{!this.state.start? 'Start': 'Stop'}</Text></TouchableOpacity>
                    <TouchableOpacity style={this.resetButtonStyle()} onPress={this.handleReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={this.state.start? styles.button : styles.disabledButton} onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.mSec)} disabled={!this.state.start}><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
                </View>
                <ListComponent style={styles.scroll} lap={this.lapArr} />
            </View>
        );
    }
}

export default StopwatchContainer;
