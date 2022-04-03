import React from 'react';

export class List extends React.Component {
  render(){
    // class componentではthisでpropsを取り出す
    const {title} = this.props;
    return (
      <div>
        {title}
      </div>
    )
  }
}