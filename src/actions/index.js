export function increaseCounter() {
    return {
        type: 'INCREASE_COUNTER',
        payload: {
            counter_increment_unit: 2
        }
    }
}