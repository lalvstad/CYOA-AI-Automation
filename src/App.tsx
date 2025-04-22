import { Key, useState} from 'react';

class TreeNode {
  private _scene: Scene;
  private _left: TreeNode | null;
  private _right: TreeNode | null;

  public get scene(): Scene {
    return this._scene;
  }

  public set scene(scene: Scene) {
    this._scene = scene;
  }

  public get Left(): TreeNode | null {
    return this._left;
  }

  public set left(node: TreeNode) {
    if (node !== null) {
      this._left = node;
    } else {
      this._left = null;
    }
  }

  public get Right(): TreeNode | null {
    return this._right;
  }

  public set right(node: TreeNode) {
    if (node !== null) {
      this._right = node;
    } else {
      this._right = null;
    }
  }

  constructor(scene: any) {
    this._scene = scene;
    this._left = null;
    this._right = null;
  }
}

class Scene {
  private _prompt: string;
  private _choice1: string[];
  private _choice2: string[];

  public get prompt(): string {
    return this._prompt;
  }

  public set prompt(value: string) {
    this._prompt = value;
  }

  public get choice1(): string[] {
    return this._choice1;
  }

  public set choice1(value: string[]) {
    this._choice1 = value;
  }

  public get choice2(): string[] {
    return this._choice2;
  }

  public set choice2(value: string[]) {
    this._choice2 = value;
  }

  constructor(prompt: string, choice1: string[], choice2: string[]) {
    this._prompt = prompt;
    this._choice1 = choice1;
    this._choice2 = choice2;
  }
}

/*
* TRACKING STORY LINES
* CODE: _ _ _ _
* 1: C = CEO, E = Employee. 2: A-Z for different story line from choice. 3, 4: 1-9 for scene numbers in that storyline.
* */

// [SceneCode, [prompt, [choice1, nextScene], [choice2, nextScene]]]
const employeeScenes = [
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
    ["EA01",["Prompt1" , ["", ""], ["", ""]]],
]

const root = new TreeNode('start');

export default function AdventureGame() {

  const [currentScene, setCurrentScene] = useState('start');
  const [aiScore, setAIScore] = useState(50); // 0 - Negative feeling, 50 - neutral feeling, - 100 Positive feeling
  const [isCEO, setIsCEO] = useState(false);

  // convert over into a binary tree data structure, with each of the scenes as the left and right child of the
  // root scene.

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