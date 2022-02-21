import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {IDialogProps} from '../containers/dialog/dialog.types';
import {ICartProp} from '../pages/cart/cart.types';


export type RootStackParamList = {
    Genre: undefined;
    Cart: ICartProp;
    Dialog: IDialogProps
};

export type RootScreenStackProps<T extends keyof RootStackParamList> =
NativeStackScreenProps<RootStackParamList, T>;
