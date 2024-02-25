
const metrics = {
    progress: "0/3",
    goalsCompleted: "0/3",
    goalsInProgress: "3/3"
}
export default function TaskMetrics() {
    
    return (
        <div>
            <span>Today&apos;s progress: {metrics.progress}</span>
                <span>Goals completed { metrics.goalsCompleted }</span>
                <span>Goals in progress: { metrics.goalsInProgress }</span>
        </div>
    )
}