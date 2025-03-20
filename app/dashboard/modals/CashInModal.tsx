import { cashinAction } from "~/actions/dashboard";

import Modal from "~/components/Modal";
import Form from "~/components/Form";
import Input from "~/components/Input";

const CashInModal = ({ isOpen }: { isOpen: boolean }) => {
    return isOpen &&
        <Modal title="Cash In" dismissible >
            <Form action={cashinAction} submitText="Add">
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

export default CashInModal