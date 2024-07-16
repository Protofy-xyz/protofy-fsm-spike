import {Protofy} from 'protobase'
import customAutomationApi from "./customAutomation";

const autoApis = Protofy("apis", {
    customAutomation: customAutomationApi
})

export default (app, context) => {
    Object.keys(autoApis).forEach((k) => {
        autoApis[k](app, context)
    })
}