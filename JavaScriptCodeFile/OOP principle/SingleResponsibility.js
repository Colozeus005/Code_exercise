import logMessage from './logger.js'

class CalorieTracker {
    constructor(maxCalories){
        this.maxCalories = maxCalories
        this.currentCalories = 0
    }

    trackCalories(calorieCount){
        this.currentCalories += calorieCount
        if (this.currentCalories > this.maxCalories){
            logMessage("Max calories exceeded")
        }
    }
}

const calorietracker = new CalorieTracker(2000)
calorietracker.trackCalories(500)
calorietracker.trackCalories(1000)
calorietracker.trackCalories(700)