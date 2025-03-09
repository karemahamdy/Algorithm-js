// 3304. Find the K - th Character in String Game I

/**
 * @param {number} k
 * @return {character}
 */

function findKthCharacter(k, char = 'a', length = 1) {

  if (length === 1) return char;

  let halfLength = length / 2;
  if (k > halfLength) {

    char = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
    return findKthCharacter(k - halfLength, char, halfLength);
  } else {

    return findKthCharacter(k, char, halfLength);
  }
}

function kthCharacter(k) {
  let n = Math.ceil(Math.log2(k));
  let length = 2 ** n;
  return findKthCharacter(k, 'a', length);
}

