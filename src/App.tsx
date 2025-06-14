
import ClassComponent from "./components/ClassComponent.tsx";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Layout from "./components/Layout.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
import NameChanger from "./components/NameChanger.tsx";
import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
import CounterAdvanced from "./components/CounterAdvanced.tsx";


function App() {

  return (
    <>
        <Layout>
            {/*<ClassComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component With Props"/>*/}
            {/*    */}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title="Is a Arrow Functional Component With Props"*/}
            {/*    description="this is a description!"/>*/}


            {/*    <h1 className="text-center text-2xl font-bold ">This is a heading1 title</h1>*/}
            {/*    <FunctionalComponent/>*/}

            {/*<ClassComponentWithState/>*/}
            {/*<FunctionalComponentWithState/>*/}
            {/*<Counter/>*/}
            {/*<NameChanger/>*/}
            {/*<CounterWithMoreStates/>*/}
            <CounterAdvanced/>
        </Layout>
    </>
  )
}

export default App
