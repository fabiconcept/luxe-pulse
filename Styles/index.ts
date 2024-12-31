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


export const FavouriteStyles = StyleSheet.create({
    btn: {
        padding: 7,
        aspectRatio: 1,
        backgroundColor: "#fff",
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#8E8E9355",
    }
})

export const PromoCardStyles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: '#FFC10B',
        padding: 30,
        overflow: 'hidden',
        height: 150,
        position: 'relative',
        zIndex: 5
    },
    image: {
        width: '100%',
        objectFit: 'contain',
        height: 150,
    },
    imageCOntainer: {
        position: 'relative',
        width: '100%',
        height: 150,
        top: 0,
        left: 60,
    },
    secondImage: {
        position: 'absolute',
        top: 20,
        left: 60,
    },
    textContainer: {
        position: 'absolute',
        top: "25%",
        left: 30,
        zIndex: 2,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        color: '#000',
        maxWidth: 150
    },
    shopNow: {
        marginTop: 15,
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    shopNowText: {
        color: '#fff',
        maxWidth: 150
    },
    decoContainer: {
        position: 'absolute',
        top: 20,
        left: "5%",
        width: '90%',
        height: '95%',
        backgroundColor: '#feecb8',
        borderRadius: 20,
        zIndex: 1
    },
    decoContainer2: {
        position: 'absolute',
        top: 30,
        left: "10%",
        width: '80%',
        height: '95%',
        backgroundColor: '#fbf1d6',
        borderRadius: 20,
    },
});