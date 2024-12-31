import { StyleSheet } from "react-native";

export const IndexStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#F9F4EC',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: 7,
    },
});

export const SearchBarstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        position: "relative",
        overflow: "hidden",
        borderRadius: 50,
        alignItems: "center",
        padding: 5,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#8E8E9355",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 15,
    },
    btn: {
        padding: 7,
        aspectRatio: 1,
        backgroundColor: "#FFC10B",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
    }
});