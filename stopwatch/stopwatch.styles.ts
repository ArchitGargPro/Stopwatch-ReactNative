import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffff99",
        height: "100%",
        width: "100%",
        padding: "5%",
    },

    title: {
        fontSize: 50,
        alignSelf: "center",
    },

    text: {
        fontSize: 30,
        alignSelf: "center",
    },

    parent: {
        display: "flex",
        flexDirection: "row",
        borderWidth:10,
        borderRadius: 80,
        borderColor: "#694966",
        backgroundColor: '#694966',
        paddingLeft: "10%",
        margin: "5%",
    },

    child: {
        fontSize: 40,
        color: "#C89933",
        alignSelf: "center",
        marginTop: "8%",
        marginBottom: "-5%"
    },

    buttonParent: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#123456",
        borderRadius: 20,
        alignContent: "center",
    },

    button: {
        backgroundColor: "#55ff55",
        width: "30%",
        padding: "5%",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#ff9900",
        alignSelf: "center",
        margin: "5%"
    },

    disabledButton: {
        backgroundColor: "#009900",
        width: 100,
        padding: "5%",
        borderRadius: 20,
        borderWidth: 3,
        borderColor: "#ff9900",
        alignSelf: "center",
        margin: "5%"
    },

    buttonText: {
        color: "#555555",
        fontSize: 20,
        alignSelf: "center"
    },

    scroll: {
        maxHeight: "50%",
        backgroundColor: "#C89933",
        borderRadius: 20,
        margin: "5%",
        padding: 5,
    },

    item: {
        padding: 9,
        fontSize: 20,
        height: 44,
        color: "#5C415D",
        backgroundColor: "#fff",
        marginBottom: 1,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 10,
    },

    lapTitle: {
        color: "#123456",
        fontSize: 20,
        alignSelf: "center",
        paddingBottom: 2,
        marginBottom: 3,
        borderBottomWidth: 1,
        borderColor: "#ffffff",
    }
});

export default styles;
