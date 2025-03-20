import { topupAction } from "~/actions/dashboard";

import Modal from "~/components/Modal";
import Form from "~/components/Form";
import Input from "~/components/Input";

const TopUpModal = ({ isOpen }: { isOpen: boolean }) => {
    return isOpen &&
        <Modal title="Top up" dismissible >
            <Form action={topupAction} submitText="Add">
                <Input
                    required
                    label="Amount"
                    placeholder="Enter amount"
                    name="amount"
                    type="number"

                />
            </Form>
        </Modal>
}

export default TopUpModal