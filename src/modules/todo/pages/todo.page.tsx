import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Task} from '../components/Task';
import {useTodo} from '../hooks/useTodo';

export function TodoPage() {
  const {tasks, didTapTask} = useTodo();

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
      <FlatList
        data={tasks}
        extraData={tasks}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => {
              didTapTask(index);
            }}>
            <Task
              title={item.title}
              description={item.description}
              completed={item.completed}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
