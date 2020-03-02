const colors = {
  primary1: '#7f226b',
  primary2: '#a73a8f',
  theme1: '#ffffff',
  theme2: '#f9f9f9',
  theme3: '#f2f2f2',
  theme4: '#dddddd',
  theme5: '#cccccc',
  text1: '#222222',
  text2: '#555555',
  text3: '#777777',
  textAlt1: '#ffffff',
  textAlt2: '#cccccc',
  textAlt3: '#999999',
  errorText: '#821717',
};

export default {
  colors,
  app: {
    bgColor: colors.theme2,
  },
  button: {
    bgColor: colors.theme1,
    borderColor: colors.theme4,
    color: colors.text3,
    _focus: {
      bgColor: colors.theme1,
      borderColor: colors.theme2,
      color: colors.text1,
      outlineColor: colors.theme5,
    },
    _hover: {
      bgColor: colors.theme2,
      borderColor: colors.theme5,
      color: colors.text1,
    },
    _primary: {
      bgColor: colors.primary1,
      borderColor: colors.primary1,
      color: colors.textAlt1,
      _focus: {
        bgColor: colors.primary1,
        borderColor: colors.primary1,
        color: colors.textAlt1,
        outlineColor: colors.primary2,
      },
      _hover: {
        bgColor: colors.primary2,
        borderColor: colors.primary1,
        color: colors.textAlt1,
      },
    },
  },
};
