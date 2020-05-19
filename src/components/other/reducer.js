import slides from '../helpers/slides';

export default function reducer(state, action){
        switch (action.type) {
          case "PROGRESS":
          case "NEXT":
            return {
              ...state,
              takeFocus: false,
              isPlaying: action.type === "PROGRESS",
              currentIndex: (state.currentIndex + 1) % slides.length
            };
          case "PREVIOUS":
            return {
              ...state,
              takeFocus: false,
              isPlaying: false,
              currentIndex:
                (state.currentIndex - 1 + slides.length) % slides.length
            };
          case "GOTO":
            return {
              ...state,
              takeFocus: true,
              currentIndex: action.index
            };
          default:
            return state;
        }
}