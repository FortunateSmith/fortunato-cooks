import React from 'react'
import {Button, Card, Inline} from '@sanity/ui'

const ButtonComponent = ({buttonLabel, onClick}) => {

  return (
    <div>
      <Card padding={4}>
        <Inline space={[3, 3, 4]}>
          <Button
            fontSize={[2, 2, 3]}
            // icon={AddIcon}
            mode="ghost"
            padding={[3, 3, 4]}
            text={buttonLabel}
            onClick={onClick}
            />
        </Inline>
      </Card>
    </div>
  )
}

export default ButtonComponent;
