import React, {ChangeEvent, useState} from "react";

export const ProfileStatusWithHooks = (props: any) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || '----'}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={onStatusChange} value={status} autoFocus onBlur={deactivateEditMode}/>
                </div>}
        </div>
    )

}