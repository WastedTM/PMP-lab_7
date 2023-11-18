import React from "react"
import {NativeBaseProvider, Stack, StatusBar, Text, Input, Button, Toast} from "native-base"

function Form(props) {
    return null;
}

export default function App() {
    const [username, setUsername] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');

    const handleLogin = () => {
        const test = { username: 'User', password: 'Password' };

        if (username !== test.username || userPassword !== test.password) {
            Toast.show({
                title: "You have entered an incorrect password or username",
                duration: 3000,
            })
            return
        }

        Toast.show({
            title: "You have successfully logged in",
            duration: 3000,
        })
    }

    return (
        <NativeBaseProvider>
            <Stack space={3} alignItems="center">
                    <Input
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholder="Username"
                        width={200}
                        marginTop={20}
                    />
                    <Input
                        secureTextEntry
                        value={userPassword}
                        onChangeText={(text) => setUserPassword(text)}
                        placeholder='Password'
                        width={200}
                    />
                    <Button full onPress={handleLogin} marginTop = {20}>
                        <Text>Увійти</Text>
                    </Button>
            </Stack>

            <StatusBar theme='auto'></StatusBar>
        </NativeBaseProvider>
    );
}
