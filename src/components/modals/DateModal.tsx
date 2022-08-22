import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { Badge, Modal, Text, Select } from "@geist-ui/core";
import { DateRangePicker } from "react-date-range";
import moment from "moment";

type dateModalProps = {
  show: boolean;
  toggleModal?: () => void;
  actionTrigger?: () => void;
};

const DateModal = (props: dateModalProps) => {
  const { show, toggleModal, actionTrigger } = props;
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: moment().add(1, "M"),
      key: "selection",
    },
  ]);

  return (
    <>
      <Modal
        width={"650px"}
        className="modal"
        visible={show}
        onClose={toggleModal}
      >
        <Modal.Content>
          <DateRangePicker
            onChange={(item: any) => setDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={date}
            direction="horizontal"
          />
        </Modal.Content>
        <Modal.Action passive onClick={toggleModal}>
          Close
        </Modal.Action>
        <Modal.Action onClick={actionTrigger}>
          <Text b>Apply Filter</Text>
        </Modal.Action>
      </Modal>
    </>
  );
};

export default DateModal;
