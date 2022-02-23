export interface IDialogProps {
    title: string;
    description: string;
    callback?(extra?: any):void;
    extra?:any;
    secondaryCallback?(extra?: any):void;
    secondaryActionText?: string;
    actionText?: string;
}
