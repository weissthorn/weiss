import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Modal, Text, useMediaQuery } from '@geist-ui/core';
import { DateRange } from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import { useTranslation, Translation } from 'components/intl/Translation';

type dateModalProps = {
  show: boolean;
  date: any;
  lang: string;
  toggleModal?: () => void;
  setDate: (value: any) => void;
  actionTrigger?: () => void;
};

const DateModal = (props: dateModalProps) => {
  const { show, date, lang, toggleModal, setDate, actionTrigger } = props;
  const mobile = useMediaQuery('mobile');
  const isCnLang = lang === 'cn' ? 'zhCN' : lang;

  return (
    <>
      <Modal
        width={'45rem'}
        className="modal"
        visible={show}
        disableBackdropClick={true}
        onClose={toggleModal}
      >
        <Modal.Content>
          <DateRange
            locale={locales[isCnLang]}
            onChange={(item: any) => setDate([item.selection])}
            // showSelectionPreview={true}
            // moveRangeOnFirstSelection={false}
            months={mobile ? 1 : 2}
            ranges={date}
            direction="horizontal"
          />
        </Modal.Content>
        <Modal.Action passive onClick={toggleModal}>
          <Translation lang={lang} value="Close" />
        </Modal.Action>
        <Modal.Action onClick={actionTrigger}>
          <Text b>
            <Translation lang={lang} value="Apply filter" />
          </Text>
        </Modal.Action>
      </Modal>
    </>
  );
};

export default DateModal;
