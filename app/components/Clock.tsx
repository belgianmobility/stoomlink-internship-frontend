function Clock() {

    const today = new Date()
    let hour = today.getHours()
    let minute = today.getMinutes()

    return (
        <div>{hour}:{minute}</div>
    )
    
}

export default Clock