import React from 'react'
// import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event';
import {Flex, Card, Text, Checkbox, Box, Label, Grid, Inline, Button} from '@sanity/ui'

// import {RadioInput} from "@sanity/ui"

const IngredientForStep = React.forwardRef((props, ref) => {
  return (
    <>
      <Card padding={4}>
        <Flex justify={'space-betwee4'}>
          <Grid columns={2} gap={6}>
            <Inline space={3}>
              <Checkbox id="checkbox" style={{display: 'block'}} />
              <Box flex={1} paddingLeft={3}>
                <Text>
                  <label htmlFor="checkbox">Label text</label>
                </Text>
              </Box>
            </Inline>
            <Inline space={3}>
              <Checkbox id="checkbox" style={{display: 'block'}} />
              <Box flex={1} paddingLeft={3}>
                <Text>
                  <label htmlFor="checkbox">Label text</label>
                </Text>
              </Box>
            </Inline>
            <Inline space={3}>
              <Checkbox id="checkbox" style={{display: 'block'}} />
              <Box flex={1} paddingLeft={3}>
                <Text>
                  <label htmlFor="checkbox">Label text</label>
                </Text>
              </Box>
            </Inline>
            <Inline space={3}>
              <Checkbox id="checkbox" style={{display: 'block'}} />
              <Box flex={1} paddingLeft={3}>
                <Text>
                  <label htmlFor="checkbox">Label text</label>
                </Text>
              </Box>
            </Inline>
          </Grid>
        </Flex>
      </Card>

      <Card padding={4} >
        <Inline space={[3, 3, 4]}>
          <Button
            fontSize={[2, 2, 3]}
            // icon={AddIcon}
            mode="ghost"
            padding={[3, 3, 4]}
            text="Update"
          />
        </Inline>
      </Card>
    </>
  )
})

export default IngredientForStep

{
  /* <Card>
  <Heading as="h2" size={4}>
  Ingredients for Step
  </Heading>
  </Card> */
}
{
  /* <Grid> */
}
{
  /* <Card padding={4}>
  <Flex align="center">
  <Checkbox id="checkbox" style={{display: 'block'}} />
  <Box flex={1}  paddingLeft={3} paddingTop={1}>
  <Text>
  <Label htmlFor="checkbox">Label A</Label>
  </Text>
  </Box>
  <Checkbox id="checkbox" style={{display: 'block'}} />
  <Box flex={1} paddingLeft={3} paddingTop={1}>
  <Text>
  <Label htmlFor="checkbox">Label B</Label>
  </Text>
  </Box>
  <Checkbox id="checkbox" style={{display: 'block'}} /> 
  <Box flex={1} paddingLeft={3} paddingTop={1}>
  <Text>
  <Label htmlFor="checkbox">Label C</Label>
  </Text>
  </Box>
  <Checkbox id="checkbox" style={{display: 'block'}} /> 
  <Box flex={1} paddingLeft={3} paddingTop={1}>
  <Text>
  <Label htmlFor="checkbox">Label C</Label>
  </Text>
  </Box>
  <Checkbox id="checkbox" style={{display: 'block'}} /> 
  <Box flex={1} paddingLeft={3} paddingTop={1}>
  <Text>
  <Label htmlFor="checkbox">Label C</Label>
  </Text>
  </Box>
  <Checkbox id="checkbox" style={{display: 'block'}} /> 
  <Box flex={1} paddingLeft={3} paddingTop={1}>
  <Text>
  <Label htmlFor="checkbox">Label C</Label>
  </Text>
  </Box>
  </Flex> */
}
{
  /* </Card> */
}
{
  /* </Grid> */
}
