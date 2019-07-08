// Neural Network 
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';

export class NeuralNetwork {
    constructor(learningMatrix) {
        this.learningMatrix = learningMatrix;
    }

    predict() {
        this.learningMatrix = tf.tensor(this.learningMatrix);
        return this.learningMatrix;
    }

    training() {
        this.learningMatrix = this.learningMatrix;
    }
}