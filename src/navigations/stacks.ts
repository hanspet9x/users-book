import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IDialogProps} from '../containers/dialog/dialog.types';


export type RootStackParamList = {
    Genre: undefined;
    Dialog: IDialogProps;
    AppLoading: undefined;
};

export type RootScreenStackProps<T extends keyof RootStackParamList> =
NativeStackScreenProps<RootStackParamList, T>;
