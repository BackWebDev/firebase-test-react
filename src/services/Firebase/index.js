import * as firebase from "firebase";
import config from "./config";

firebase.initializeApp(config);

class Firebase {

	constructor (refName = null) {
		this.store = firebase.firestore();

		// Set collection if exists
		if (refName) {
			this.setRef(refName);
		}
	}

	setRef (name) {
		this.ref = this.store.collection(name);
	}

	add (data) {
		return this.ref.add(data);
	}

	get () {
		return this.ref.get();
	}

	getByID () {
		return this.ref.doc(id).get();
	}

	update (id, data) {
		return this.ref.doc(id).update(data);
	}
}

export default Firebase;