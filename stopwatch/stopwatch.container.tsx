import React, {Component} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./stopwatch.styles";
import ListComponent from "./list.component";

class StopwatchContainer extends Component {
    state = {
        min: 0,
        sec: 0,
        mSec: 0,
        start: false,
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
                    <TouchableOpacity style={styles.button} onPress={this.handleReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity>
                    <TouchableOpacity style={this.state.start? styles.button : styles.disabledButton} onPress={()=>this.handleLap(this.state.min, this.state.sec, this.state.mSec)} disabled={!this.state.start}><Text style={styles.buttonText}>Lap</Text></TouchableOpacity>
                </View>
                <ListComponent style={styles.scroll} lap={this.lapArr} />
            </View>
        );
    }
}

export default StopwatchContainer;

// enum EStatus {
//     START = 'START',
//     PAUSE = 'PAUSE',
//     RESET = 'RESET',
//     LAP = 'LAP',
// }
//
// function StopwatchContainer () {
//     const [min, setMin] = useState(0);
//     const [sec, setSec] = useState(0);
//     const [mSec, setmSec] = useState(0);
//     const [startTitle, setStartTitle] = useState('START');
//     const [time, setTime] = useState(null);
//
//     const padToTwo = (number) => (number <= 9 ? `0${number}`: `${number}`);
//     const padToThree = (number) => {
//         if (number <= 9) {
//             return `00${number}`;
//         } else if (number <= 99) {
//             return `0${number}`;
//         } else return `${number}`;
//     };
//
//     const startTimer = () => {
//         // TODO code to start the timer
//         if (startTitle === EStatus.START) {
//             setStartTitle(EStatus.PAUSE);
//             setTime(setInterval(() => {
//                 if(mSec !== 900) {
//                     setmSec(mSec + 100);
//                 } else if(sec !== 59) {
//                     setmSec(0);
//                     setSec(sec + 1);
//                 } else if(min !== 59) {
//                     setmSec(0);
//                     setSec(0);
//                     setMin(min + 1);
//                 }
//             },100));
//         } else {
//             // TODO code to pause the timer
//             setStartTitle((EStatus.START));
//         }
//     };
//
//     const lap = () => {
//         // TODO save current time in lap array
//     };
//
//     const resetTimer = () => {
//         setmSec(0);
//         setMin(0);
//         setSec(0);
//         clearInterval();
//     };
//
//     return (
//         <View style={styles.container}>
//             <View style={styles.parent}>
//                 <Text style={styles.child}>{padToTwo(min)+':'}</Text>
//                 <Text style={styles.child}>{padToTwo(sec)+':'}</Text>
//                 <Text style={styles.child}>{padToThree(mSec)}</Text>
//             </View>
//             <View style={styles.buttonParent}>
//                 <TouchableOpacity style={styles.button} onPress={startTimer}><Text style={styles.buttonText}>{startTitle}</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={lap}><Text style={styles.buttonText}>{EStatus.LAP}</Text></TouchableOpacity>
//                 <TouchableOpacity style={styles.button} onPress={resetTimer}><Text style={styles.buttonText}>{EStatus.RESET}</Text></TouchableOpacity>
//             </View>
//         </View>
//     );
// }
//
// export default StopwatchContainer;
