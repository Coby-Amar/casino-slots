type ModalPropsDismissible = {
    dismissible: boolean
    onDismiss(): boolean | Promise<boolean>
}
type ModalPropsDismissibleOptions =
    | Partial<ModalPropsDismissible>
    | ModalPropsDismissible

type ModalProps = HasChildren & { title: string } & ModalPropsDismissibleOptions

interface WonModalProps {
    worth: number
}