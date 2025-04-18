import { Key, useState} from 'react';

export default function AdventureGame() {

  const [currentScene, setCurrentScene] = useState('start');
  const [aiScore, setAIScore] = useState(50); // 0 - Negative feeling, 50 - neutral feeling, - 100 Positive feeling
  const [isCEO, setIsCEO] = useState(false);

  const employeeScenes = {
    start: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "sceneA1"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene1: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "sceneA2"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene2: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "sceneA3"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene3: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "sceneA4"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene4: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "SceneA5"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene5: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "SceneA6"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene6: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "SceneA7"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene7: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "SceneA8"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene8: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "SceneA8"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },

    scene9: {
      text: "placeholder",
      choices: [
        {text: "placeholder", nextScene: "deepForest"},
        {text: "placeholder", nextScene: "placeholder"},
      ]
    },
  };

  const handleChoice = (choice: any) => {
    if (typeof choice === "number") {
      setAIScore(aiScore + choice);
    }

    if (typeof choice === "string") {
      setCurrentScene(choice);
    }

    if (typeof choice === "boolean") {
      setIsCEO(choice);
    }
  }

  const reset = () => {
    setCurrentScene(currentScene);
    setAIScore(50);
    setIsCEO(false);
  }

  const scene = scenes[currentScene];

  return (
      <div className="flex flex-col items-center juastify-center min-h-screen bg-gray-800 text-white p-4">
        <div className="max-w-2xl w-full bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-yellow-300">Automation Station</h1>

            <div className="flex justify-between mb-6 bg-gray-800 p-3 rounded-md">
              <div className="flex items-center">
                <span className="font-bold mr-2">AI Attitude:</span>
                <div className="h-4 w-32 bg-gray-600 rounded-full overflow-hidden">
                  <div
                      className="h-full bg-red-500"
                      style={{width: `${aiScore}%`}}
                  ></div>
                </div>
                <span className="ml-2">{aiScore}/100</span>
              </div>
            </div>

            <div className="mb-6 leading-relaxed">
              <p>{scene.text}</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-bold text-lg text-yellow-300">What will you do?</h2>
              {scene.choices.map((choice: any, index: Key | null | undefined) => {

                return (
                    <button
                      key={index}
                      onClick={() => handleChoice(choice)}
                      className={`w-full p-3 text-left rounded-md hover:bg-gray-600 transition bg-gray-800`}
                    >
                      {choice.text}
                    </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}