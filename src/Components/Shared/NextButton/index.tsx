import React from 'react'
import styles from './index.module.scss'

const NextButton = ({ disabled }: any) => (
  <button
    type="submit"
    disabled={disabled}
    className={`float-right mb-3 btn btn-primary btn-lg ${styles.btnNext}`}
  >
    NEXT STEP >
  </button>
)

export default NextButton
