import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking
} from 'react-native';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/102760140?v=4'
const urlToMyGithub = 'https://github.com/taiuanascimento';

const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const colorGithub = '#010409';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo link....');
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
        <View style={style.content}>
            <Image
                accessibilityLabel="Taiuã numa sala com fundo branco"
                style={style.avatar}
                source={{uri: imageProfileGithub}}
            />
            <Text
                accessibilityLabel="Nome Taiuã Nascimento"
                style={[style.defaultText, style.name]}>
                Taiuã Nascimento
            </Text>
            <Text
                accessibilityLabel="Nickname taiua nascimento"
                style={[style.defaultText, style.nickName]}>
                taiuanascimento
            </Text>
            <Text
                accessibilityLabel="Descricão: Desenvolvedor Java e JavaScript"
                style={[style.defaultText, style.description]}>
                Desenvolvedor Java e JavaScript
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text
                        accessibilityLabel="Botão para abrir perfil no GitHub"
                        style={[style.defaultText, style.textButton]}>
                        Open in GitHub
                    </Text>
                </View>
            </Pressable>
        </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: { //Column
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 4,
    },

    defaultText:{
        color: 'white',
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colorFontGithub,
    },
    nickName: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colorFontGithub,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});