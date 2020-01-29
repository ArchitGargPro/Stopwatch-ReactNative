import React, {Component} from "react";
import {FlatList, ScrollView, Text} from "react-native";
import styles from "./stopwatch.styles";

class ListComponent extends Component {

    render() {
        function padToTwo (number) {
            if (number <= 9) {
                return `0${number}`
            } else {
                return `${number}`
            }
        }
        // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',this.props.lap);

        // const data = [
        //     {
        //         "key": 1,
        //         "mSec": 4,
        //         "min": 0,
        //         "sec": 1,
        //     },
        //     {
        //         "key": 2,
        //         "mSec": 45,
        //         "min": 58,
        //         "sec": 10,
        //     },
        // ];

        return (
            <ScrollView style={styles.scroll}>
                <Text style={styles.lapTitle}>Laps</Text>
                <FlatList
                    data={this.props.lap}
                    renderItem={({item}) =>
                        <Text key={item.key} style={styles.item}>
                            {`${item.key}.  `}{padToTwo(item.min)}:{padToTwo(item.sec)}:{padToTwo(item.mSec)}
                        </Text>}
                />
            </ScrollView>
        );
    }
}

export default ListComponent;
