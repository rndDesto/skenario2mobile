import { FC, memo } from 'react';

import classes from './InputField.module.css';

interface Props {
  className?: string;
  classes?: {
    inputWithLabel?: string;
    input?: string;
    content?: string;
    text?: string;
    hintText?: string;
  };
}
export const InputField: FC<Props> = memo(function InputField(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.inputWithLabel} ${props.classes?.inputWithLabel || ''}`}>
        <div className={`${classes.input} ${props.classes?.input || ''}`}>
          <div className={`${classes.content} ${props.classes?.content || ''}`}>
            <div className={`${classes.text} ${props.classes?.text || ''}`}>Enter your email</div>
          </div>
        </div>
      </div>
      <div className={`${classes.hintText} ${props.classes?.hintText || ''}`}>
        <span className={classes.labelWrapper}>
          <span className={classes.label}>We care about your data in our </span>
          <span className={classes.label2}>privacy policy</span>
          <span className={classes.label3}>.</span>
        </span>
      </div>
    </div>
  );
});
