<template>
  <div class="custom-select" ref="selectCustom">
    <label v-if="isLabel" :for="String(id)" class="custom-select__label p-13-500">
      {{ label }}
    </label>
    <div v-if="showSearch" @click="handleDropdownToggle">
      <slot
        name="default"
        :selectedOption="selectedOption"
        :handleDropdownToggle="handleDropdownToggle"
      ></slot>
    </div>
    <button
      v-else
      ref="selectButton"
      :id="String(id)"
      :class="['custom-select__button', { 'custom-select__button--selected': selectedOption }]"
      class="p-13-400"
      @click="handleDropdownToggle"
    >
      {{ selectedOption || placeholder }}
      <IconArrowDown :class="{ 'arrow-down--rotate': dropdownOpen }" />
    </button>
    <transition-group name="fade" appear>
      <div
        :class="[
          'custom-select__dropdown-container',
          { 'custom-select__dropdown-container--open-upwards': openUpwards }
        ]"
        v-if="dropdownOpen"
      >
        <ul ref="dropdownList" v-if="dropdownOpen" class="custom-select__dropdown">
          <li
            v-for="(option, i) in options"
            :key="i"
            @click.stop="selectOption(option)"
            class="custom-select__option p-13-400"
            :value="getOptionValue(option)"
          >
            {{ getOptionLabel(option) }}
          </li>
        </ul>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, toRefs, onMounted, onBeforeUnmount } from 'vue'
import type {
  SelectPropsI,
  // SelectPropsOptionI,
  SelectOptionTypes
} from '@/types/componentsProps/commonProps'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'

const props = defineProps<SelectPropsI>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const dropdownOpen = ref<boolean>(false)
const { modelValue } = toRefs(props)
const selectedOption = ref(modelValue.value)
const openUpwards = ref<boolean>(false)
const selectButton = ref<HTMLButtonElement | null>(null)
const selectCustom = ref<HTMLElement | null>(null)
const dropdownList = ref<HTMLElement | null>(null)

const showSearch = props.showSearch || false

const handleDropdownToggle = (): void => {
  if (!dropdownOpen.value) {
    calculateDropdownDirection()
  }
  dropdownOpen.value = !dropdownOpen.value
}

const calculateDropdownDirection = (): void => {
  if (selectButton.value) {
    const rect = selectButton.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    const dropdownHeight = dropdownList.value ? dropdownList.value.scrollHeight : 250
    const spaceBelow = viewportHeight - rect.bottom
    const spaceAbove = rect.top
    openUpwards.value = spaceBelow < dropdownHeight && spaceAbove > spaceBelow
  }
}

const selectOption = (option: SelectOptionTypes): void => {
  if (option) {
    selectedOption.value = getOptionLabel(option)
    dropdownOpen.value = false
    emit('update:modelValue', getOptionId(option))
  }
}

const handleClickOutside = (event: MouseEvent): void => {
  if (selectCustom.value && !selectCustom.value.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

const getOptionLabel = (option: SelectOptionTypes): string => {
  return 'label' in option ? option.label : option.title
}

const getOptionValue = (option: SelectOptionTypes): number => {
  return 'value' in option ? option.value : option.id
}

const getOptionId = (option: SelectOptionTypes): number => {
  return 'id' in option ? option.id : option.value
}

watch(modelValue, (newValue) => {
  const option = props.options.find((option) => getOptionId(option) === newValue)
  selectedOption.value = option ? getOptionLabel(option) : ''
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  const option = props.options.find((option) => getOptionId(option) === props.modelValue)
  selectedOption.value = option ? getOptionLabel(option) : ''
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped lang="scss">
.custom-select {
  width: 100%;
  display: block;
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: $default-light-grey;
    border: $default-border;
    padding: 12px 14px;
    cursor: pointer;
    border-radius: 6px;
    transition: $default-transition;
    margin-top: 10px;
    text-align: left;
    opacity: 0.6;

    &--selected {
      opacity: 1;
    }
  }
  .arrow-down--rotate {
    transform: rotateX(180deg);
    transition: $default-transition;
  }
  &__dropdown-container {
    position: absolute;
    width: 100%;
    top: 108%;
    left: 0;
    z-index: 2;
    background-color: $default-white;
    border: $default-border;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &--open-upwards {
      top: auto;
      bottom: 63%;
    }
  }
  &__dropdown {
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 20px 10px;
    max-height: 300px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $hover-color;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      background-color: #f9f9fd;
    }
  }

  &__option {
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 6px;

    &::placeholder {
      opacity: 0.6;
    }

    &:hover,
    &:focus {
      background-color: $default-light-violet;
    }
  }
}
.fade {
  &-enter-active,
  .fade-leave-active {
    transition: $default-transition;
  }

  &-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
