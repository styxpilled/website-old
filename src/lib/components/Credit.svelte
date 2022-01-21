<script lang="ts">
	function validate() {
		if (validateCardNumber() && validateExpiryDate() && validateCVC()) {
			console.log('Valid');
            valid = true;
            number = undefined, date = undefined, cvc = undefined;
			return true;
		} else {
			console.log('Invalid');
			return false;
		}
	}
	let number, date, cvc;
    let valid = false;
	function validateCardNumber() {
		let regex = new RegExp('^[0-9]{16}$');
		console.log('validate card number');
		if (!regex.test(number)) return false;
		return luhnCheck(number);
	}

	function luhnCheck(value: string) {
		if (/[^0-9-\s]+/.test(value)) return false;
		let nCheck = 0,
			bEven = false;
		value = value.replace(/\D/g, '');

		for (var n = value.length - 1; n >= 0; n--) {
			var cDigit = value.charAt(n),
				nDigit = parseInt(cDigit, 10);

			if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

			nCheck += nDigit;
			bEven = !bEven;
		}
		console.log('i am luhn check');
		return nCheck % 10 == 0;
	}

	function validateExpiryDate() {
		let currentMonth = new Date().getMonth() + 1;
		let currentYear = new Date().getFullYear().toString().substring(2);
		let month = date.substring(0, 2);
		console.log(month);
		let year = date.substring(3, 5);
		console.log(year);
		if (year < currentYear) return false;
		else if (year == currentYear && month < currentMonth) return false;
		return true;
	}

	function validateCVC() {
		let regex = new RegExp('^[0-9]{3}$');
		console.log('validate cvc');

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

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .submit {
            align-self: flex-end;
        }
    }
</style>