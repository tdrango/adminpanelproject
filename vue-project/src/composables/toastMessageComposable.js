import { useToast } from "vue-toastification";

const toast = useToast();
const defaultErrorToastMessage = "Error";
const defaultWarningToastMessage = "Warning";
const defaultSuccessToastMessage = "Success";

export function successToast(message = defaultSuccessToastMessage) {
    return toast(message, { type: 'success' });
}

export function warningToast(message = defaultWarningToastMessage) {
    return toast(message, { type: 'warning' });
}

export function dangerToast(message = defaultErrorToastMessage) {
    return toast(message, { type: 'error' });
}
