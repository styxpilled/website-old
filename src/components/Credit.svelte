<script lang="ts">
	let number: string, date: string, cvc: string;
    let valid = false;

	function validate() {
		if (validateCardNumber() && validateExpiryDate() && validateCVC()) {
            valid = true;
            number = undefined, date = undefined, cvc = undefined;
			return true;
		} else {
			return false;
		}
	}

	function validateCardNumber() {
		let regex = new RegExp('^[0-9]{16}$');
		if (!regex.test(number)) return false;
		return luhnCheck(number);
	}

	function luhnCheck(value: string) {
		if (/[^0-9-\s]+/.test(value)) return false;
		let nCheck = 0,
			bEven = false;
		value = value.replace(/\D/g, '');

		for (let n = value.length - 1; n >= 0; n--) {
			let cDigit = value.charAt(n),
				nDigit = Number(cDigit);

			if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

			nCheck += nDigit;
			bEven = !bEven;
		}
		return nCheck % 10 == 0;
	}

	function validateExpiryDate() {
		let currentMonth = new Date().getMonth() + 1;
		let currentYear = new Date().getFullYear().toString().substring(2);
		let month = date.substring(0, 2);
		let year = date.substring(3, 5);
		if (year < currentYear) return false;
		else if (year == currentYear && Number(month) < currentMonth) return false;
		return true;
	}

	function validateCVC() {
		let regex = new RegExp('^[0-9]{3}$');
		if (!regex.test(cvc)) return false;
		return true;
	}
</script>

{#if valid}
        <p>Are you stupid?</p>
{:else}
	<p>It would mean a ton if <br> you could support me!</p>
	<form on:submit|preventDefault={validate}>
		<label for="number">Card number:</label><br>
		<input bind:value={number} type="text" id="number" name="number" /><br>
		<label for="date">Expiry date:</label><br>
		<input bind:value={date} type="text" id="date" name="date" /><br>
		<label for="cvc">Security code:</label><br>
		<input bind:value={cvc} type="text" id="cvc" name="cvc" /><br>
		<input type="submit" value="Submit" class="submit" />
	</form>
{/if}

<style lang="postcss">
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & .submit {
      align-self: flex-end;
    }
  }
</style>