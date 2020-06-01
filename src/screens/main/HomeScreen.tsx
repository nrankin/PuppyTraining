import React from 'react'
import { Image, Text, TextInput, View } from '../../components/base'
import { LargeHeader } from '../../components/headers'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/rootReducer'
import { doSetPuppy } from '../../store/dog'

export default function HomeScreen(): React.ReactElement {
  const dispatch = useDispatch()
  const { entity } = useSelector((state: RootState) => state.puppy)
  console.log(entity)
  const puppyName = entity.name || 'puppy'
  const helloPuppy = 'Hi ' + puppyName + '!'
  const setPuppy = (name: string, ageWeeks: number) => {
    dispatch(doSetPuppy({ name, ageWeeks }))
  }

  return (
    <SafeAreaView>
      <View>
        <LargeHeader text="Puppy Training" />
        <View padding={4} justifyContent="space-between">
          <Text fontSize={1} padding={2}>
            Learn and record your puppy's progress so you always know what to
            work on next.
          </Text>

          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 2,
              borderRadius: 20,
              padding: 10,
              fontSize: 16,
              marginTop: 15,
              textAlign: 'center',
            }}
            onChangeText={(puppyName) => setPuppy(puppyName, 8)}
            value={entity.name}
            placeholder="Enter your puppy's name"
            placeholderTextColor="gray"
          />

          <Text fontSize={3} textAlign="center" padding={3}>
            {entity.name != null && helloPuppy}
          </Text>
        </View>
        <Image
          source={require('../../images/tigger-pink-coat.jpg')}
          style={{ height: 400, width: 420 }}
        />
      </View>
    </SafeAreaView>
  )
}
