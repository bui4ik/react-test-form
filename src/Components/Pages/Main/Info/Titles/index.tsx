import React from 'react'

const texts = [
  ['Create your VINchain account', 'Easy to use anytime, anywhere for everyone'],
  ["Let's introduce ourselves!", 'Your name will be displayed in all reports, documents, etc.'],
  ['Tracking company vehicles? (optional)'],
  ['Set your time Zone'],
  ['Check your data'],
  ['Congratulations! Your account has been created']
]

const TitlesSwitch = ({ step }: any) => (
    <>
      {Object.values(texts[step - 1]).map((el: any) => (
          <h3 key={texts[step - 1].indexOf(el)} className="text-center text-secondary font-weight-light">
            {el}
          </h3>
      ))}
    </>
)

export default TitlesSwitch
