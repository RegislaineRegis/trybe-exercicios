const Task = () => {
    const array = ['JavaScript', 'HTML', 'React', 'CSS'];
    return (
      <ol>{array.map((elemento)=> <li>{elemento}</li>)}</ol>
    );
  }

  export default Task;