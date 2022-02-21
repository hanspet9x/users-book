import {NativeStackScreenProps} from '@react-navigation/native-stack';


export type RootStackParamList = {
    Genre: undefined;
    Cart: {genreUrl: string}
    Dialog: {name: string, description: string}
};

export type RootScreenStackProps =
NativeStackScreenProps<RootStackParamList, keyof RootStackParamList>;
