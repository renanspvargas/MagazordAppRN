import {Text, View} from 'react-native';

interface TaskProps {
  title: string;
  description: string;
  completed: boolean;
}

export function Task(props: TaskProps) {
  return (
    <View
      style={{
        padding: 15,
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: props.completed ? '#C0C0C0' : 'transparent',
      }}>
      <View style={{maxWidth: '85%'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.title}</Text>
        <Text style={{}}>{props.description}</Text>
      </View>
      <View
        style={{
          borderColor: '#0000CD',
          backgroundColor: props.completed ? '#0000CD' : 'transparent',
          width: 20,
          height: 20,
          borderRadius: 5,
          borderWidth: 2,
        }}></View>
    </View>
  );
}
