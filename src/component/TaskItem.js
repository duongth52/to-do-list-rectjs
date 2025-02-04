import React, { Component } from 'react';

export default class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    onUpdateTask = () => {
        this.props.onUpdateTask(this.props.task.id);
    }
    
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status ? "label label-success": "label label-primary"}
                                onClick={ this.onUpdateStatus }>
                        {task.status ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={ this.onUpdateTask }>
                        <span className="fa fa-pencil mr-5" />Sửa
                            </button>
                    &nbsp;
                            <button type="button" className="btn btn-danger" onClick={ this.onDeleteTask }>
                        <span className="fa fa-trash mr-5" />Xóa
                            </button>
                </td>
            </tr>

        );
    }
}
